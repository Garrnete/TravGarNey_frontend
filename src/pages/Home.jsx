import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 animate-fadeIn px-4">
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
          TravGarney
        </h1>
        <p className="text-xl italic mb-8 text-gray-100 drop-shadow-md">
          "Your Story. Your Journey. TravGarney."
        </p>
        <Link
          to="/trips"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg text-lg shadow-md hover:bg-yellow-300 transition"
        >
          View My Trips
        </Link>
      </div>
    </div>
  );
}

