import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
            }}
        >
            {/* Navbar */}
            <nav className="absolute top-6 right-10 flex space-x-6 text-lg font-medium">
                <Link to="/" className="hover:text-yellow-300 transition">
                    Home
                </Link>
                <Link to="/trips" className="hover:text-yellow-300 transition">
                    All Trips
                </Link>
                <Link to="/add" className="hover:text-yellow-300 transition">
                    Add Trip
                </Link>
            </nav>

            {/* Hero Section */}
            <div className="text-center animate-fadeIn">
                <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">TravGarney</h1>
                <p className="text-2xl mb-8 drop-shadow-md">
                    Capture your adventures. Relive your memories.
                </p>
                <Link
                    to="/trips"
                    className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-yellow-300 transition"
                >
                    View My Trips
                </Link>
            </div>
        </div>
    );
}


