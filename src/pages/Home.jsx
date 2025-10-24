import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center animate-fadeInSlow"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      {/* Warm sunset overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-yellow-100/20 to-orange-200/30"></div>

      {/* Content */}
      <div className="relative z-10 animate-fadeIn px-4 drop-shadow-xl">
        <h1 className="text-6xl font-extrabold mb-4 tracking-wide drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
          TravGarney
        </h1>
        <p className="text-xl italic mb-8 text-white/90 font-light">
          "Your Story. Your Journey. TravGarney."
        </p>
        <Link
          to="/trips"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg text-lg shadow-md hover:bg-yellow-300 transition relative overflow-hidden group"
        >
          <span className="relative z-10">View My Trips</span>
          {/* Sunlight shimmer effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-white/70 to-yellow-200 opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-700"></span>
        </Link>
      </div>
    </div>
  );
}



