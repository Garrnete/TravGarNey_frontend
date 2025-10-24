import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white flex justify-between items-center px-8 py-4 shadow-md z-20">
      <Link to="/" className="text-2xl font-bold hover:text-yellow-300 transition">
        TravGarney
      </Link>
      <div className="flex gap-6 text-lg">
        <Link to="/" className="hover:text-yellow-300 transition">
          Home
        </Link>
        <Link to="/trips" className="hover:text-yellow-300 transition">
          Trips
        </Link>
        <Link to="/journals" className="hover:text-yellow-300 transition">
          Journals
        </Link>
        <Link
          to="/trips/add"
          className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 transition"
        >
          + Add Trip
        </Link>
      </div>
    </nav>
  );
}



