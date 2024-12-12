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
import player14 from "../images/Team/14.png";     
import player15 from "../images/Team/15.png";     
import player16 from "../images/Team/16.png";     
import player17 from "../images/Team/17.png";     
import player18 from "../images/Team/18.png";     
import player19 from "../images/Team/19.png";     
import player20 from "../images/Team/20.png";     
import player21 from "../images/Team/21.png";     
import player22 from "../images/Team/22.png";     
import player23 from "../images/Team/23.png";     
import player24 from "../images/Team/24.png";     
import player25 from "../images/Team/25.png";     
import player26 from "../images/Team/26.png";     
import player27 from "../images/Team/27.png";     
import player28 from "../images/Team/28.png";     
import player29 from "../images/Team/29.png";     
import player30 from "../images/Team/30.png";     
import player31 from "../images/Team/31.png";     
import player32 from "../images/Team/32.png";     
import player33 from "../images/Team/33.png";     
import player34 from "../images/Team/34.png";     
import player35 from "../images/Team/35.png";     
import player36 from "../images/Team/36.png";     
import player37 from "../images/Team/37.png";     
import player38 from "../images/Team/38.png";     
import player39 from "../images/Team/39.png";     
import player40 from "../images/Team/40.png";     
import player41 from "../images/Team/41.png";     

import backgroundImage from "../images/bg3.png"; // Import gambar latar belakang

//Hover Player
import player1Hover from "../images/TeamHover/1.png"; //Hover Gambarnya
import player2Hover from "../images/TeamHover/2.png";
import player3Hover from "../images/TeamHover/3.png";
import player4Hover from "../images/TeamHover/4.png";
import player5Hover from "../images/TeamHover/5.png"; //Hover Gambarnya
import player6Hover from "../images/TeamHover/6.png";
import player7Hover from "../images/TeamHover/7.png";
import player8Hover from "../images/TeamHover/8.png";
import player9Hover from "../images/TeamHover/9.png";
import player10Hover from "../images/TeamHover/10.png"; //Hover Gambarnya
import player11Hover from "../images/TeamHover/11.png";
import player12Hover from "../images/TeamHover/12.png";
import player13Hover from "../images/TeamHover/13.png";
import player14Hover from "../images/TeamHover/14.png";
import player15Hover from "../images/TeamHover/15.png";
import player16Hover from "../images/TeamHover/16.png";
import player17Hover from "../images/TeamHover/17.png";
import player18Hover from "../images/TeamHover/18.png";
import player19Hover from "../images/TeamHover/19.png";
import player20Hover from "../images/TeamHover/20.png";
import player21Hover from "../images/TeamHover/21.png";
import player22Hover from "../images/TeamHover/22.png";
import player23Hover from "../images/TeamHover/23.png";
import player24Hover from "../images/TeamHover/24.png";
import player25Hover from "../images/TeamHover/25.png";
import player26Hover from "../images/TeamHover/26.png";
import player27Hover from "../images/TeamHover/27.png";
import player28Hover from "../images/TeamHover/28.png";
import player29Hover from "../images/TeamHover/29.png";
import player30Hover from "../images/TeamHover/30.png";
import player31Hover from "../images/TeamHover/31.png";
import player32Hover from "../images/TeamHover/32.png";
import player33Hover from "../images/TeamHover/33.png";
import player34Hover from "../images/TeamHover/34.png";
import player35Hover from "../images/TeamHover/35.png";
import player36Hover from "../images/TeamHover/36.png";
import player37Hover from "../images/TeamHover/37.png";
import player38Hover from "../images/TeamHover/38.png";
import player39Hover from "../images/TeamHover/39.png";
import player40Hover from "../images/TeamHover/40.png";
import player41Hover from "../images/TeamHover/41.png";

//Choach Gambar
import choach1 from "../images/ChoachImage/42.png";
import choach2 from "../images/ChoachImage/43.png";
import choach3 from "../images/ChoachImage/44.png";
import choach4 from "../images/ChoachImage/45.png";
import choach5 from "../images/ChoachImage/46.png";
import choach6 from "../images/ChoachImage/47.png";
import choach7 from "../images/ChoachImage/48.png";
import choach8 from "../images/ChoachImage/49.png";
import choach9 from "../images/ChoachImage/50.png";
import choach10 from "../images/ChoachImage/51.png";
//Hover Choach
import choachHover1  from "../images/ChoachImage/42.png";
import choachHover2 from "../images/ChoachImage/43.png";
import choachHover3  from"../images/ChoachImage/44.png";
import choachHover4 from "../images/ChoachImage/45.png";
import choachHover5  from"../images/ChoachImage/46.png";
import choachHover6 from "../images/ChoachImage/47.png";
import choachHover7  from"../images/ChoachImage/48.png";
import choachHover8 from "../images/ChoachImage/49.png";
import choachHover9  from"../images/ChoachImage/50.png";
import choachHover10 from "../images/ChoachImage/51.png";

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
    {
      image: player14,
      hoverImage: player14Hover,
    },
    {
      image: player15,
      hoverImage: player15Hover,
    },
    {
      image: player16,
      hoverImage: player16Hover,
    },
    {
      image: player17,
      hoverImage: player17Hover,
    },
    {
      image: player18,
      hoverImage: player18Hover,
    },
    {
      image: player19,
      hoverImage: player19Hover,
    },
    {
      image: player20,
      hoverImage: player20Hover,
    },
    {
      image: player21,
      hoverImage: player21Hover,
    },
    {
      image: player22,
      hoverImage: player22Hover,
    },
    {
      image: player23,
      hoverImage: player23Hover,
    },
    {
      image: player24,
      hoverImage: player24Hover,
    },
    {
      image: player25,
      hoverImage: player25Hover,
    },
    {
      image: player26,
      hoverImage: player26Hover,
    },
    {
      image: player27,
      hoverImage: player27Hover,
    },
    {
      image: player28,
      hoverImage: player28Hover,
    },
    {
      image: player29,
      hoverImage: player29Hover,
    },
    {
      image: player30,
      hoverImage: player30Hover,
    },
    {
      image: player31,
      hoverImage: player31Hover,
    },
    {
      image: player32,
      hoverImage: player32Hover,
    },
    {
      image: player33,
      hoverImage: player33Hover,
    },
    {
      image: player34,
      hoverImage: player34Hover,
    },
    {
      image: player35,
      hoverImage: player35Hover,
    },
    {
      image: player36,
      hoverImage: player36Hover,
    },
    {
      image: player37,
      hoverImage: player37Hover,
    },
    {
      image: player38,
      hoverImage: player38Hover,
    },
    {
      image: player39,
      hoverImage: player39Hover,
    },
    {
      image: player40,
      hoverImage: player40Hover,
    },
    {
      image: player41,
      hoverImage: player41Hover,
    },
  ];

  const coaches = [
    {
      image: choach1,
      hoverImage: choachHover1,
    },
    {
      image: choach2,
      hoverImage: choachHover2,
    },
    {
      image: choach3,
      hoverImage: choachHover3,
    },
    
  ];

  const manajemen = [
    {
      image: choach4,
      hoverImage: choachHover4,
    },
    {
      image: choach5,
      hoverImage: choachHover5,
    },
    {
      image: choach6,
      hoverImage: choachHover6,
    },
    {
      image: choach7,
      hoverImage: choachHover7,
    },
    {
      image: choach8,
      hoverImage: choachHover8,
    },
    {
      image: choach9,
      hoverImage: choachHover9,
    },
    {
      image: choach10,
      hoverImage: choachHover10,
    },
  ]

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
        <h2 className="text-7xl font-bold text-white text-left mb-8 md:pl-8 tracking-widest text-shadow-heading  ">
          PLAYERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center ">
          {players.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
      </div>
 
      <div className="relative z-10 pt-20 md:pt-24">
        <h2 className="text-7xl font-bold text-white text-left mb-8 md:pl-8 tracking-widest text-shadow-heading ">
          COACH
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center ">
          {coaches.map((coach, index) => (
            <PlayerCard key={index} player={coach} />
          ))}
        </div>
      </div>

       <div className="relative z-10 pt-20 md:pt-24">
        <h2 className="text-7xl font-bold text-white text-left mb-8 md:pl-8 tracking-widest text-shadow-heading ">
          MANAGEMENT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center ">
          {manajemen.map((manajemen, index) => (
            <PlayerCard key={index} player={manajemen} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default PlayersAndCoach;
